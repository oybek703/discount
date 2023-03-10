import { NextRequest, NextResponse } from 'next/server'
import { routeNames } from '@/common/route-names'

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl
  const tokenData = request.cookies.get('_token')
  if (pathname === routeNames.profile) {
    if (!tokenData || !tokenData.value) {
      return NextResponse.redirect(new URL(routeNames.signIn, request.url))
    }
  }
  if (
    [routeNames.signIn, routeNames.signUp].includes(
      pathname as unknown as routeNames
    )
  ) {
    if (tokenData && tokenData.value) {
      return NextResponse.redirect(new URL(routeNames.main, request.url))
    }
  }
}
