import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

type PageBreadCrumpType = { navs: { title: string; url?: string }[] }

const PageBreadcrumb: React.FC<PageBreadCrumpType> = props => {
  const { navs } = props
  const { asPath } = useRouter()

  const currentPageHref = asPath.split('/')[asPath.split('/').length - 1]

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <Link href="/" passHref>
          <BreadcrumbLink>
            <FiHome />
          </BreadcrumbLink>
        </Link>
      </BreadcrumbItem>

      {navs?.map(nav => (
        <BreadcrumbItem key={nav.url}>
          <Link href={nav.url || ''} passHref>
            <BreadcrumbLink isCurrentPage={!nav.url || nav.url === currentPageHref}>{nav.title}</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default PageBreadcrumb
