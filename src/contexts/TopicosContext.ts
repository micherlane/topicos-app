import {createContext} from 'react';
import { Topico } from '../models/Topico';

export const TopicosContext = createContext([] as Topico[]);
export const TopicoDispatchContext = createContext(null);