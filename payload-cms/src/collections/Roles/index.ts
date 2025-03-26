import { CollectionConfig } from "payload";

export const Roles: CollectionConfig = {
  slug: "roles",
  admin: {
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
  ],
  timestamps: true,
};
