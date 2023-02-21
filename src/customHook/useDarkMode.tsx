
import { useLocalStorage, useMediaQuery, useUpdateEffect } from 'usehooks-ts';

const COLOR_SHEMA_QUERY = "(prefers-color-scheme: dark)"

export const useDarkMode = (defautValue: boolean) => {
   const isDark = useMediaQuery(COLOR_SHEMA_QUERY)
   const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    defautValue ?? isDark ?? false
   )

   useUpdateEffect(() => {
    setDarkMode(isDark)
   },[isDark])

   return {
    isDarkMode,
    toggle:() => setDarkMode(prev => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
   }
};

