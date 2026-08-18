export function saveState<T>(state: T, key: string) {
    const str = JSON.stringify(state);
    localStorage.setItem(key, str);
}

export function loadState<T>(key: string): T | undefined {
    try {
        const str = localStorage.getItem(key);
        if (!str) {
            return undefined;
        }
        return JSON.parse(str) as T;
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

export const USER_PROFILE_KEY = 'users';