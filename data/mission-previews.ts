export type MissionPreview = {
  missionId: string;
  format: string;
  title: string;
  subtitle: string;
  code?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  insight: string;
};

export const missionPreviews: MissionPreview[] = [
  {
    missionId: "foodtech",
    format: "RMarkdown",
    title: "Cleaning workflow",
    subtitle: "Extrait réaliste du notebook étudiant corrigé",
    code: `foodtech_clean <- foodtech_raw |>
  distinct() |>
  filter(!is.na(city), !is.na(order_value)) |>
  mutate(
    delivery_time_min = parse_number(delivery_time),
    repeat_customer = if_else(repeat_customer == "yes", 1, 0)
  )`,
    insight:
      "Les étudiants documentent les règles de nettoyage avant de produire leurs indicateurs.",
  },
  {
    missionId: "foodtech",
    format: "KPI table",
    title: "City ranking",
    subtitle: "Tableau de décision produit après agrégation",
    table: {
      headers: ["City", "Satisfaction", "Repeat", "Delivery", "Score"],
      rows: [
        ["Nantes", "4.6", "46.1%", "25.4 min", "0.873"],
        ["Lille", "4.3", "41.8%", "28.2 min", "0.605"],
        ["Paris", "4.1", "38.4%", "31.6 min", "0.421"],
      ],
    },
    insight:
      "Le livrable attendu n'est pas une app : c'est un raisonnement reproductible menant à une recommandation.",
  },
];