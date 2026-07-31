import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Seo from '../lib/seo.jsx'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="relative min-h-screen flex items-center justify-center px-4 text-center">
        <div className="absolute inset-0 grid-bg opacity-40" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)' }} />
        <div className="relative">
          <div className="font-display text-6xl font-semibold text-gradient">404</div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-display font-semibold">This page doesn't exist.</h1>
          <p className="mt-3 text-muted max-w-md mx-auto">
            The page you're looking for may have moved or never existed. Head back to the homepage.
          </p>
          <Button as={Link} to="/" className="mt-8 inline-flex">
            Back to home
          </Button>
        </div>
      </section>
    </>
  )
}
