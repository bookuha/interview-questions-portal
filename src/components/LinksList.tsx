import { Link, LinkProps, List, ListItem, ListProps } from "@chakra-ui/react";

//TODO: Finish (19.06.23). How to pass CSS props inside?

interface Link {
  label: string;
  url: string;
}

// display | flexWrap

interface Props extends Omit<ListProps, "display" | "flexWrap"> {
  links: Link[];
  linkChakraProps?: Omit<LinkProps, "href">;
}

const LinksList = ({ links, linkChakraProps, ...chakraProps }: Props) => {
  return (
    <List display="inline-flex" flexWrap="wrap" {...chakraProps}>
      {links.map((link) => (
        <ListItem>
          <Link {...linkChakraProps} href={link.url}>
            {link.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default LinksList;
