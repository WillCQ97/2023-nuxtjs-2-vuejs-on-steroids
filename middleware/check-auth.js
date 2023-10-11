export default function (context) {
  console.log('[MIDDLEWARE] Check Auth')

  /* context.req will be always null on the client */

  context.store.dispatch('initAuth', context.req)
}
