import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { provincesState, provinceState } from 'src/store'

const useProvince = () => {
  const { asPath } = useRouter()
  const [province, setProvince] = useAtom(provinceState)
  const [provinces] = useAtom(provincesState)

  const provinceUrl = asPath.split('/')[2]

  useEffect(() => {
    const _province = provinces?.find(prov => prov.slug === provinceUrl)

    setProvince({ title: _province?.name, url: _province?.slug })
  }, [provinceUrl])

  return { provinces, province }
}

export default useProvince
