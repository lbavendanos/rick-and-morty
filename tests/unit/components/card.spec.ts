import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Card from '@/components/Card.vue'
import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  RouteRecordRaw
} from 'vue-router'
import { defineComponent } from 'vue'
import { Image } from '@/types'

interface MockProps {
  type: string
  image: Image
  name: string
  description: string
  href?: string
  to?: RouteLocationRaw
}

function getMockProps(): MockProps {
  return {
    type: 'CHARACTER',
    image: {
      src: 'http://placeimg.com/640/480',
      alt: 'Character name'
    },
    name: 'Archie Hartmann',
    description: 'Dolorum odit a.'
  }
}

describe('Card.vue', () => {
  it('render props', () => {
    const mockProps = getMockProps()

    render(Card, {
      global: {
        stubs: ['router-link']
      },
      props: mockProps
    })

    const type = screen.getByText(mockProps.type)
    const image = screen.getByAltText(mockProps.image.alt)
    const name = screen.getByText(mockProps.name)
    const description = screen.getByText(mockProps.description)

    expect(type).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('render learn more link with "href" prop', () => {
    const baseMockProps = getMockProps()
    const mockProps: MockProps = { ...baseMockProps, href: '/foo' }

    render(Card, {
      global: {
        stubs: ['router-link']
      },
      props: mockProps
    })

    const buttonLink = screen.getByRole('button')

    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink?.getAttribute('href')).toBe(mockProps.href)
  })

  it('render learn more link with "to" prop', async () => {
    const SomeComponent = defineComponent({
      name: 'SomeComponent'
    })

    const routeRecordRaw: RouteRecordRaw = {
      path: '/',
      name: 'someComponent',
      component: SomeComponent
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [routeRecordRaw]
    })

    router.push('/')
    await router.isReady()

    const to = { name: routeRecordRaw.name }
    const baseMockProps = getMockProps()
    const mockProps: MockProps = { ...baseMockProps, to }

    render(Card, {
      global: {
        plugins: [router]
      },
      props: mockProps
    })

    const buttonLink = screen.getByRole('button')

    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink?.getAttribute('href')).toBe(routeRecordRaw.path)
  })
})
