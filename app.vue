<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <AppHero />
    <client-only>
      <AppAumenta />
      <AppRisultati />
    </client-only>
    <AppFooter />
  </div>
</template>
