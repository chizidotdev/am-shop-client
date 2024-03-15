import { useRouter, usePathname, useSearchParams } from "next/navigation";

const FILTER_KEY = "filter";

type SetFilter<T extends string> = (key: T) => T;
type UseFilterReturn<T extends string> = { filter: T; setFilter: SetFilter<T> };

export const useFilter = <T extends string>(defaultValue: T): UseFilterReturn<T> => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const filter = (searchParams.get(FILTER_KEY) ?? defaultValue) as T;

  const setFilter: SetFilter<T> = (key) => {
    params.set(FILTER_KEY, key);
    router.push(pathname + "?" + params.toString());

    return key;
  };

  return { filter, setFilter };
};
