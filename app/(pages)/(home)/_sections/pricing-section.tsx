import { Check } from 'lucide-react'

import { Button } from '@/components/primitives/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/primitives/card'

export function PricingSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mb-12 text-neutral-500 md:text-xl dark:text-neutral-400">
            Get access to all apps with a single subscription. No hidden fees,
            no in-app purchases.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Monthly</CardTitle>
              <div className="mt-4 flex items-baseline font-bold text-5xl">
                $9.99
                <span className="ml-1 font-medium text-lg text-muted-foreground">
                  /month
                </span>
              </div>
              <CardDescription className="mt-4">
                Perfect for trying out our service.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Access to 230+ apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Use on 1 Mac</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="relative flex flex-col border-emerald-500">
            <div className="-top-4 absolute right-0 left-0 mx-auto w-fit rounded-full bg-emerald-500 px-3 py-1 font-medium text-white text-xs">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle>Annual</CardTitle>
              <div className="mt-4 flex items-baseline font-bold text-5xl">
                $7.99
                <span className="ml-1 font-medium text-lg text-muted-foreground">
                  /month
                </span>
              </div>
              <CardDescription className="mt-4">
                Save 20% with annual billing.
                <span className="ml-1 font-medium text-emerald-500">
                  $95.88/year
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Access to 230+ apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Use on 1 Mac</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Family</CardTitle>
              <div className="mt-4 flex items-baseline font-bold text-5xl">
                $14.99
                <span className="ml-1 font-medium text-lg text-muted-foreground">
                  /month
                </span>
              </div>
              <CardDescription className="mt-4">
                Share with up to 4 family members.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Access to 230+ apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Use on up to 4 Macs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Family account management</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
