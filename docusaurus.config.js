// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "EvoluServices",
    tagline: "Meios de Pagamentos Ltda.",
    url: "https://evoluservices.github.io",
    baseUrl: "/evoluservices-developer/",
    projectName: "evoluservices-developer",
    organizationName: "EvoluServices",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/evo.png",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "EvoluServices",
                logo: {
                    alt: "Evoluservices Logo",
                    src: "img/evo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        label: "Introdução",
                        position: "left",
                    },
                    {
                        type: "doc",
                        docId: "payment-link/intro-payment-link",
                        label: "Link de Pagamento",
                        position: "left",
                    },
                    {
                        type: "doc",
                        docId: "remote-transaction/intro-remote-transaction",
                        label: "Transação Remota",
                        position: "left",
                    },
                    {
                        type: "doc",
                        docId: "credential/credentials-info",
                        label: "Credenciais",
                        position: "left",
                    },
                    {
                        type: "doc",
                        docId: "contact",
                        label: "Contato",
                        position: "left",
                    },
                    {
                        href: "https://github.com/EvoluServices/evoluservices-developer",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Documentação",
                        items: [
                            {
                                label: "Introdução",
                                to: "/docs/intro",
                            },
                            {
                                label: "Link de Pagamento",
                                to: "/docs/payment-link/intro-payment-link",
                            },
                            {
                                label: "Transação Remota",
                                to: "/docs/remote-transaction/intro-remote-transaction",
                            },
                            {
                                label: "Contato",
                                to: "/docs/contact",
                            }
                        ],
                    },
                    {
                        title: "Serviços",
                        items: [
                            {
                                label: "Saúde Service",
                                href: "https://saudeservice.com.br/",
                            },
                            {
                                label: "Evo",
                                href: "https://www.sejaevo.com.br/",
                            },
                            {
                                label: "Finpet",
                                href: "https://www.finpet.com.br/",
                            },
                        ],
                    },
                    {
                        title: "Mais",
                        items: [
                            {
                                label: "Linkedin",
                                href: "https://br.linkedin.com/company/evoluservices",
                            },
                            {
                                label: "Instagram",
                                href: "https://www.instagram.com/evoluservices",
                            },
                            {
                                label: "Facebook",
                                href: "https://www.facebook.com/timeevoluservices",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} EvoluServices Meios de Pagamentos Ltda.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;