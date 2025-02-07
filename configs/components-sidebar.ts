import { Routes } from 'utils/get-route-context'

const sidebar: Routes = {
  routes: [
    {
      title: 'Components',
      heading: false,
      routes: [
        {
          title: 'Layout',
          path: '/docs/components/layout',
          sort: true,
          open: true,
          summarize: true,
          routes: [
            {
              title: 'Aspect Ratio',
              path: '/docs/components/layout/aspect-ratio',
            },
            {
              title: 'Box',
              path: '/docs/components/layout/box',
            },
            {
              title: 'Center',
              path: '/docs/components/layout/center',
            },
            {
              title: 'Container',
              path: '/docs/components/layout/container',
            },
            {
              title: 'Flex',
              path: '/docs/components/layout/flex',
            },
            {
              title: 'Grid',
              path: '/docs/components/layout/grid',
            },
            {
              title: 'SimpleGrid',
              path: '/docs/components/layout/simple-grid',
            },
            {
              title: 'Stack',
              path: '/docs/components/layout/stack',
            },
            {
              title: 'Wrap',
              path: '/docs/components/layout/wrap',
            },
          ],
        },
        {
          title: 'Forms',
          path: '/docs/components/form',
          sort: true,
          open: true,
          summarize: true,
          routes: [
            {
              title: 'Button',
              path: '/docs/components/form/button',
            },
            {
              title: 'Checkbox',
              path: '/docs/components/form/checkbox',
            },
            {
              title: 'Editable',
              path: '/docs/components/form/editable',
            },
            {
              title: 'Form Control',
              path: '/docs/components/form/form-control',
            },
            {
              title: 'Icon Button',
              path: '/docs/components/form/icon-button',
            },
            {
              title: 'Input',
              path: '/docs/components/form/input',
            },
            {
              title: 'Number Input',
              path: '/docs/components/form/number-input',
            },
            {
              title: 'Pin Input',
              path: '/docs/components/form/pin-input',
            },
            {
              title: 'Radio',
              path: '/docs/components/form/radio',
            },
            {
              new: true,
              title: 'Range Slider',
              path: '/docs/components/form/range-slider',
            },
            {
              title: 'Select',
              path: '/docs/components/form/select',
            },
            {
              title: 'Slider',
              path: '/docs/components/form/slider',
            },
            {
              title: 'Switch',
              path: '/docs/components/form/switch',
            },
            {
              title: 'Textarea',
              path: '/docs/components/form/textarea',
            },
          ],
        },
        {
          title: 'Data Display',
          path: '/docs/components/data-display',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Badge',
              path: '/docs/components/data-display/badge',
            },
            {
              title: 'Code',
              path: '/docs/components/data-display/code',
            },
            {
              title: 'Divider',
              path: '/docs/components/data-display/divider',
            },
            {
              title: 'Kbd',
              path: '/docs/components/data-display/kbd',
            },
            {
              title: 'List',
              path: '/docs/components/data-display/list',
            },
            {
              title: 'Stat',
              path: '/docs/components/data-display/stat',
            },
            {
              title: 'Table',
              path: '/docs/components/data-display/table',
            },
            {
              title: 'Tag',
              path: '/docs/components/data-display/tag',
            },
          ],
        },
        {
          title: 'Feedback',
          path: '/docs/components/feedback',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Alert',
              path: '/docs/components/feedback/alert',
            },
            {
              title: 'Circular Progress',
              path: '/docs/components/feedback/circular-progress',
            },
            {
              title: 'Progress',
              path: '/docs/components/feedback/progress',
            },
            {
              title: 'Skeleton',
              path: '/docs/components/feedback/skeleton',
            },
            {
              title: 'Spinner',
              path: '/docs/components/feedback/spinner',
            },
            {
              title: 'Toast',
              path: '/docs/components/feedback/toast',
            },
          ],
        },
        {
          title: 'Typography',
          path: '/docs/components/typography',
          open: true,
          summarize: true,
          routes: [
            {
              title: 'Text',
              path: '/docs/components/typography/text',
            },
            {
              title: 'Heading',
              path: '/docs/components/typography/heading',
            },
          ],
        },
        {
          title: 'Overlay',
          path: '/docs/components/overlay',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Alert Dialog',
              path: '/docs/components/overlay/alert-dialog',
            },
            {
              title: 'Drawer',
              path: '/docs/components/overlay/drawer',
            },
            {
              title: 'Menu',
              path: '/docs/components/overlay/menu',
            },
            {
              title: 'Modal',
              path: '/docs/components/overlay/modal',
            },
            {
              title: 'Popover',
              path: '/docs/components/overlay/popover',
            },
            {
              title: 'Tooltip',
              path: '/docs/components/overlay/tooltip',
            },
          ],
        },
        {
          title: 'Disclosure',
          path: '/docs/components/disclosure',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Accordion',
              path: '/docs/components/disclosure/accordion',
            },
            {
              title: 'Tabs',
              path: '/docs/components/disclosure/tabs',
            },
            {
              title: 'Visually Hidden',
              path: '/docs/components/disclosure/visually-hidden',
            },
          ],
        },
        {
          title: 'Navigation',
          path: '/docs/components/navigation',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Breadcrumb',
              path: '/docs/components/navigation/breadcrumb',
            },
            {
              title: 'Link',
              path: '/docs/components/navigation/link',
            },
            {
              title: 'LinkOverlay',
              path: '/docs/components/navigation/link-overlay',
            },
            {
              title: 'SkipNav',
              path: '/docs/components/navigation/skip-nav',
            },
          ],
        },
        {
          title: 'Media and icons',
          path: '/docs/components/media-and-icons',
          sort: true,
          open: true,
          summarize: true,
          routes: [
            {
              title: 'Avatar',
              path: '/docs/components/media-and-icons/avatar',
            },
            {
              title: 'Icon',
              path: '/docs/components/media-and-icons/icon',
            },
            {
              title: 'Image',
              path: '/docs/components/media-and-icons/image',
            },
          ],
        },
        {
          title: 'Other',
          path: '/docs/components/other',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Transitions',
              path: '/docs/components/other/transitions',
            },
            {
              title: 'Portal',
              path: '/docs/components/other/portal',
            },
            {
              title: 'Show / Hide',
              path: '/docs/components/other/show-hide',
            },
            {
              title: 'Close Button',
              path: '/docs/components/other/close-button',
            },
          ],
        },
        {
          title: 'Recipes',
          path: '/docs/components/recipes',
          open: true,
          sort: true,
          summarize: true,
          routes: [
            {
              title: 'Floating Labels',
              path: '/docs/components/recipes/floating-labels',
            },
            {
              title: 'Horizontal Collapse',
              path: '/docs/components/recipes/horizontal-collapse',
            },
            {
              title: 'Portals and z-Index',
              path: '/docs/components/recipes/z-index',
            },
            {
              title: 'The as prop',
              path: '/docs/components/recipes/as-prop',
            },
          ],
        },
      ],
    },
  ],
}

export default sidebar
