import { setErrorMap } from 'zod';
import { zodI18nMap } from './shared/utils/zod-map-errors';

setErrorMap(zodI18nMap);
