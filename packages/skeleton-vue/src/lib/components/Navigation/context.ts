import { createContext } from '@/lib/internal/create-context';
import type { NavContext } from './types';

export const [setNavigationContext, getNavigationContext, key] = createContext<NavContext>({
	parent: 'none',
	value: '',
	expanded: false,
	onSelectionHandler: () => {}
});
