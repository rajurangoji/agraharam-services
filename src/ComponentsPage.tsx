import { Button } from "./components/ui/button";

function ComponentsPage() {
  const variants = [
    "default",
    "destructive",
    "ghost",
    "glow",
    "outline",
    "secondary",
    "link",
  ];

  return (
    <div>
      <div className="flex gap-5 m-5">
        {variants.map((variant: any) => (
          <Button key={variant} variant={variant}>
            Button {variant}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ComponentsPage;
