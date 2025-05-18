import { Toast } from '@/src/shared/utils/toast';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

type ToastItem = {
  id: string;
  message: string;
};

export const ToastHost = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const opacities = useRef(new Map<string, Animated.Value>());
  const animations = useRef(new Map<string, Animated.CompositeAnimation>());

  useEffect(() => {
    const listener = (msg: string) => {
      const id = String(Math.random() * 10000);
      opacities.current.set(id, new Animated.Value(0));
      setToasts((prev) => [...prev, { id, message: msg }]);

      const animation = Animated.sequence([
        Animated.timing(opacities.current.get(id)!, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false
        }),
        Animated.delay(10000),
        Animated.timing(opacities.current.get(id)!, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        })
      ]);

      animations.current.set(id, animation);

      animation.start(() => {
        animations.current.delete(id);
        opacities.current.delete(id);
        setToasts((prev) => prev.filter((t) => t.id !== id));
      });
    };

    Toast.subscribe(listener);
    return () => Toast.unsubscribe(listener);
  }, []);

  const removeToast = useCallback((id: string) => {
    animations.current.get(id)?.stop();
  }, []);

  return (
    <View style={styles.container}>
      {toasts.map((toast) => (
        <Animated.View
          key={toast.id}
          style={[styles.toast, { opacity: opacities.current.get(toast.id) }]}
        >
          <InnerText
            id={toast.id}
            message={toast.message}
            onPress={removeToast}
          />
        </Animated.View>
      ))}
    </View>
  );
};

function InnerText({
  id,
  message,
  onPress
}: {
  id: string;
  message: string;
  onPress: (id: string) => void;
}) {
  return (
    <Text onPress={() => onPress(id)} style={styles.text} numberOfLines={2}>
      {message}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    zIndex: 9999,
    paddingHorizontal: 10
  },
  toast: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5
  },
  text: {
    color: 'white'
  }
});
