export default  {
  name: "skill",
  title: "skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      description: "Progress of the skill from 0 to 100",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      type: "image",
    },
  ],
};