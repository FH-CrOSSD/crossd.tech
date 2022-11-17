import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Member = ({ data, parentField }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <Section color={data.color}>
      <Container
        size="medium"
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center"
      >
        {data.image && (
          <div
            data-tinafield={`${parentField}.image`}
            className="row-start-1 col-start-1 flex justify-center"
          >
            <img
              className="h-full max-h-xs lg:max-h-[250px] w-auto"
              // width="200"
              // height="200"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
        <div className="row-start-2 lg:row-start-1 lg:col-start-2 lg:col-end-4 text-center lg:text-left">
          {data.name && (
            <h2
              data-tinafield={`${parentField}.name`}
              className={`relative inline-block text-2xl mb-2 font-extrabold tracking-wide title-font bg-clip-text text-transparent bg-gradient-to-r  ${data.color === "primary"
                ? `from-white to-gray-100`
                : headlineColorClasses[theme.color]
                }`}
              //px-3 py-1 mb-8
            >
              {data.name}
              {/* <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 "></span> */}
            </h2>
          )}
          {data.text && (
            <div
              data-tinafield={`${parentField}.text`}
              className={`prose prose-md mx-auto lg:mx-0 mb-2 ${
                data.color === "primary" ? `prose-primary` : `dark:prose-dark`
              }`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          {data.link && (
            <div
              data-tinafield={`${parentField}.link`}
              className="text-md"
              // className={`w-full relative	mb-10 tracking-normal leading-tight text-lg`}
            >
              {/* <span>Profil: </span> */}
              <a href={data.link}
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                {data.link}
              </a>
            </div>
          )}
        </div>
       
      </Container>
    </Section>
  );
};

export const memberBlockSchema: TinaTemplate = {
  name: "member",
  label: "Member",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      name: "John Doe",
      link: "https://example.com",
      text: "John Doe is a hard-working team member since the beginning.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
    },
    {
      type: "string",
      label: "Link",
      name: "link",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "White", value: "white" },
      ],
    },
  ],
};
