export default {
    themeConfig: {
        nav: [
            { text: 'Congratulations', link: '/en/sveikinimai' },
            { text: 'VU SR', link: '/en/vu-sa/vu-sa' },
            { text: 'Year plan', link: '/en/mvp/mvp' },
            { text: 'Strategic directions', items: [
                { text: 'High quality studies and its environment', link: '/en/kokybiskos-studijos/nacionalinis' },
                { text: 'Strong organization', link: '/en/vu-sa-projektai' },
                { text: 'Sustainable University community', link: '/en/darni-bendruomene/darni-bendruomene' },
            ] },
            { text: 'Community', link: '/en/bendruomene' },
            { text: 'Acknowledgments', link: '/en/padeka' },

        ],

        sidebar: [
            {
                text: 'VU SR',
                items: [
                    { text: 'About VU SR', link: '/en/vu-sa/vu-sa' },
                    { text: 'Parliament', link: '/en/vu-sa/parlamentas' },
                    { text: 'Board', link: '/en/vu-sa/taryba' },
                    { text: 'Revision commision', link: '/en/vu-sa/revizijos-komisija' },
                ]
            },
            {
                text: 'Year plan',
                items: [
                    { text: 'VU SR goals', link: '/en/mvp/mvp' },
                    { text: 'Goals in VU SR units', link: '/en/mvp/tikslai-padaliniuose' },
                ]
            },
            {
                text: 'Implementation of strategic directions',
                items: [
                    {
                        text: 'High quality studies and their environment',
                        collapsed: false,
                        items: [
                            { text: 'Representation in the national space and city government', link: '/en/kokybiskos-studijos/nacionalinis' },
                            { text: 'Representation at VU', link: '/en/kokybiskos-studijos/vu' },
                            { text: 'Cooperation', link: '/en/kokybiskos-studijos/bendradarbiavimas' },
                            { text: 'Papers', link: '/en/kokybiskos-studijos/rastai' },
                            { text: 'Research', link: '/en/kokybiskos-studijos/tyrimai' },
                        ]
                    },
                    {
                        text: 'Strong organization',
                        collapsed: false,
                        items: [
                            { text: 'VU SR projects', link: '/en/stipri-organizacija/vu-sa-projektai' },
                            { text: 'Representation at VU', link: '/en/stipri-organizacija/projektu-atnaujinimas' },
                            { text: 'Cooperation', link: '/en/kokybiskos-studijos/bendradarbiavimas' },
                            { text: 'Papers', link: '/en/kokybiskos-studijos/rastai' },
                            { text: 'Research', link: '/en/kokybiskos-studijos/tyrimai' },
                        ]
                    },
                    {
                        text: 'Sustainable university community',
                        link: '/en/darni-bendruomene/darni-bendruomene',
                        collapsed: true,
                        items: [
                            { text: 'Community events', link: '/en/darni-bendruomene/renginiai' },
                            { text: 'Integration of students', link: '/en/darni-bendruomene/integracija' },
                            { text: 'Programs, Clubs and Projects', link: '/en/darni-bendruomene/pkp' },
                        ]
                    },
                ]
            }
        ],
}
}
