import { defineDevConfig } from '@junobuild/config';

export default defineDevConfig(() => ({
  satellite: {
    id: "aaaaa-bbbbb-ccccc-ddddd-cai",
    collections: {
      db: [
        {
          collection: 'notes',
          read: 'managed' as const,
          write: 'managed' as const,
          memory: 'stable' as const,
          mutablePermissions: true
        }
      ],
      storage: [
        {
          collection: 'images',
          read: 'managed' as const,
          write: 'managed' as const,
          memory: 'stable' as const,
          mutablePermissions: true
        }
      ]
    }
  }
}));
