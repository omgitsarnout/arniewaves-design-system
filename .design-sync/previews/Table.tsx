import { Table, Badge, Button } from "@omgitsarnout/arniewaves-design-system";

const columns = [
  { key: "name", header: "Plugin" },
  { key: "price", header: "Price", align: "right" },
  { key: "formats", header: "Formats" },
  {
    key: "status",
    header: "Status",
    render: (row: any) => (
      <Badge variant={row.status === "Shipping" ? "orange" : "sand"} dot>
        {row.status}
      </Badge>
    ),
  },
  {
    key: "action",
    header: "",
    align: "right",
    render: () => (
      <Button variant="ghost" size="sm">
        Details
      </Button>
    ),
  },
];

const data = [
  { id: 1, name: "AudioTeleporter", price: "$39", formats: "VST3 · AU · AAX", status: "Shipping" },
  { id: 2, name: "TapeWarmer", price: "$24", formats: "VST3 · AU", status: "Shipping" },
  { id: 3, name: "SpringVerb", price: "$19", formats: "VST3 · AU · CLAP", status: "Shipping" },
  { id: 4, name: "GrainCloud", price: "—", formats: "VST3", status: "Beta" },
];

export const PluginCatalog = () => (
  <Table caption="Plugin catalog" columns={columns} data={data} />
);
