import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        // The name of the web application
        name: 'Historverse',
        // A shorter name for the web application
        short_name: 'histoverse',
        // The URL that the web application starts at
        start_url: '/',
        // The display mode of the web application
        display: 'standalone',
        // The background color of the web application
        background_color: '#fff',
        // The theme color of the web application
        theme_color: '#fff',
        // A description of the web application
        description: siteConfig.description,
        // Icons for the web application
        icons: [{
            src: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
        }],
        // Categories that the web application belongs to
        categories: ['education', 'history'],
        // The text direction of the web application
        dir: 'ltr',
        // Overrides for the display mode
        // Specifies that the browser should first try to display the app in standalone mode.
        // If standalone mode is not supported, it will fall back to minimal-ui mode.
        display_override: ['standalone', 'minimal-ui'],
        // File handlers for the web application
        file_handlers: [
            {
                action: '/open-file',
                accept: [
                    {
                        mimeType: ['application/pdf'],
                        extensions: ['.pdf'],
                    },
                ],
            },
        ],
        // The ID of the web application
        id: '/',
        // The default language of the web application
        lang: 'en',
        // Launch handler for the web application
        launch_handler: {
            platform: 'windows',
            url: siteConfig.url.base,
        },
        // The default orientation of the web application
        orientation: 'portrait',
        // Whether the web application prefers related applications
        prefer_related_applications: false,
        // Protocol handlers for the web application
        protocol_handlers: [
            {
                protocol: 'web+histoverse',
                url: siteConfig.url.base,
            },
        ],
        // Related applications for the web application
        related_applications: [
            {
                platform: 'web',
                url: siteConfig.url.base,
            },
        ],
        // The scope of the web application
        scope: '/',
        // Screenshots of the web application
        screenshots: [
            {
                src: '/screenshot1.png',
                type: 'image/png',
                sizes: '640x480',
            },
        ],
        // Service worker configuration for the web application
        serviceworker: {
            src: '/service-worker.js',
            scope: '/',
            type: 'classic',
            update_via_cache: 'all',
        },
        // Share target configuration for the web application
        share_target: {
            action: '/share',
            method: 'post',
            enctype: 'multipart/form-data',
            params: [
                {
                    name: 'title',
                    value: 'title',
                },
                {
                    name: 'text',
                    value: 'text',
                },
            ],
        },
        // Shortcuts for the web application
        shortcuts: [
            {
                name: 'Open Historverse',
                short_name: 'Open',
                description: 'Open the Historverse app',
                url: '/',
                icons: [
                    {
                        src: '/shortcut-icon.png',
                        type: 'image/png',
                        sizes: '192x192',
                    },
                ],
            },
        ],
    }
}