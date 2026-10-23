import { InjectionToken, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => {
        // 1. Fetch the active execution platform context
        const platformId = inject(PLATFORM_ID);
        
        // 2. Only reference localStorage if running inside the client browser environment
        if (isPlatformBrowser(platformId)) {
            return localStorage;
        }
        
        // 3. Node server pass fallback: provide an empty mock object to prevent startup crashes
        return {
            length: 0,
            clear: () => {},
            getItem: (key: string) => null,
            key: (index: number) => null,
            removeItem: (key: string) => {},
            setItem: (key: string, value: string) => {},
        } as Storage;
    }
});

export class Storage {}
