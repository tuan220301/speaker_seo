import Header from "@/components/layout/Header";
import Hero from "@/components/page/home/Hero";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["home"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="relative">
        <Header />
        <Hero />
      </div>
    </TranslationsProvider>
  );
}
