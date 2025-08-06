import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useCategorias() {
  const { data, error } = useSWR(`/api/get-categorias`, fetcher)

  return {
    categorias: data,
    isLoadingCategorias: !error && !data,
    isError: error,
  }
}

export function useUsuario(email: string, password: string) {
  const { data, error } = useSWR([`/api/get-usuario?email=`+email+`&password=`+password], fetcher)
  return {
    usuario: data,
    isLoading: !error && !data,
    isError: error,
  }
}