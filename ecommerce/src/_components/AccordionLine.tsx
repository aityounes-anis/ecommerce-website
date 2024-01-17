import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionType = {
  accordionTrigger: string;
  accordionContent: string;
};

const AccordionLine = ({
  accordionTrigger,
  accordionContent,
}: AccordionType) => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start md:text-center">
            {accordionTrigger}
          </AccordionTrigger>
          <AccordionContent>{accordionContent}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionLine;
