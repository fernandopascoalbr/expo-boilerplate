type Listener = (message: string) => void;

class ToastServiceClass {
  private listeners = new Set<Listener>();

  show(message: string) {
    for (const listener of this.listeners) {
      listener(message);
    }
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: Listener) {
    this.listeners.delete(listener);
  }
}

export const Toast = new ToastServiceClass();
