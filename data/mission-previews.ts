export type MissionPreview = {
  missionId: string;
  format: string;
  title: string;
  subtitle: string;
  code?: string;
  output?: string;
};

export const missionPreviews: MissionPreview[] = [
  {
    missionId: "foodtech",
    format: "RMarkdown chunk",
    title: "Importer le fichier Excel",
    subtitle: "TP3 FoodTech — lecture de la feuille brute",
    code: `\`\`\`{r}
foodtech_file <- "foodtech_atelier_etudiants.xlsm"

food_raw <- read_excel(
  foodtech_file,
  sheet = "01_Dataset_brut",
  skip = 2
)

food_raw <- food_raw |>
  clean_names()

glimpse(food_raw)
\`\`\``,
    output: `Rows: 500
Columns: 11
$ order_id                         <chr> "ORD_001", "ORD_002", ...
$ city                             <chr> "Paris", "Lyon", "Nante", ...
$ order_value_eur                  <dbl> 32.5, 28.1, ...
$ delivery_time_min                <dbl> 31, 27, ...
$ customer_satisfaction_score_10   <dbl> 8, 7, ...
$ is_repeat_customer_0_1           <dbl> 1, 0, ...
$ is_cancelled_0_1                 <dbl> 0, 0, ...
$ promo_used_0_1                   <dbl> 1, 0, ...`,
  },
  {
    missionId: "foodtech",
    format: "RMarkdown chunk",
    title: "Audit qualité",
    subtitle: "Valeurs manquantes, doublons, incohérences",
    code: `\`\`\`{r}
colSums(is.na(food_raw))

sum(duplicated(food_raw$order_id))

unique(food_raw$city)

sum(food_raw$delivery_time_min > 120, na.rm = TRUE)
\`\`\``,
    output: `order_value_eur                   3
delivery_time_min                 2
customer_satisfaction_score_10    2

[1] 4

[1] "Paris" "Lyon" "Marseille" "Bordeaux" "Nantes" "Lille" "Nante"

[1] 2`,
  },
  {
    missionId: "foodtech",
    format: "RMarkdown chunk",
    title: "Nettoyage progressif",
    subtitle: "Correction des villes, doublons, valeurs critiques et lignes annulées",
    code: `\`\`\`{r}
food_step1 <- food_raw |>
  mutate(
    order_id = as.character(order_id),
    order_id = trimws(order_id),
    order_id = toupper(order_id),
    city = trimws(city),
    city = tolower(city)
  )

food_step1$city[food_step1$city == "nante"] <- "nantes"

food_clean <- food_step1 |>
  filter(!duplicated(order_id)) |>
  filter(
    !is.na(order_value_eur),
    !is.na(delivery_time_min),
    !is.na(customer_satisfaction_score_10)
  ) |>
  filter(
    order_value_eur > 0,
    delivery_time_min <= 120,
    is_cancelled_0_1 == 0
  )

nrow(food_raw)
nrow(food_clean)
\`\`\``,
    output: `[1] 500
[1] 486`,
  },
  {
    missionId: "foodtech",
    format: "RMarkdown chunk",
    title: "KPI par ville",
    subtitle: "Agrégation avec dplyr avant interprétation business",
    code: `\`\`\`{r}
kpi_city <- food_clean |>
  group_by(city) |>
  summarise(
    total_orders = length(order_id),
    total_revenue = sum(order_value_eur, na.rm = TRUE),
    average_order_value = mean(order_value_eur, na.rm = TRUE),
    avg_delivery_time = mean(delivery_time_min, na.rm = TRUE),
    avg_satisfaction = mean(customer_satisfaction_score_10, na.rm = TRUE),
    repeat_rate = mean(is_repeat_customer_0_1, na.rm = TRUE),
    promo_rate = mean(promo_used_0_1, na.rm = TRUE)
  )

kpi_city |>
  arrange(desc(avg_satisfaction))
\`\`\``,
    output: `# A tibble: 6 × 8
  city      total_orders total_revenue average_order_value avg_delivery_time avg_satisfaction repeat_rate promo_rate
  <chr>            <int>         <dbl>               <dbl>             <dbl>            <dbl>       <dbl>      <dbl>
1 nantes              89         2374.               26.7              25.4             8.24        0.461      0.326
2 lille               65         1598.               24.6              28.8             7.79        0.369      0.338
3 lyon                91         2449.               26.9              32.3             7.50        0.286      0.319
4 paris              106         3055.               28.8              33.9             7.37        0.217      0.349
5 bordeaux            78         2410.               30.9              37.8             7.21        0.231      0.359
6 marseille           57         1355.               23.8              42.0             6.81        0.211      0.298`,
  },
  {
    missionId: "foodtech",
    format: "ggplot2",
    title: "Visualisation KPI",
    subtitle: "Graphique simple, lisible, directement relié à la décision",
    code: `\`\`\`{r}
ggplot(kpi_city, aes(x = city, y = avg_satisfaction)) +
  geom_col() +
  coord_flip() +
  labs(
    title = "Satisfaction moyenne par ville",
    x = "Ville",
    y = "Score moyen / 10"
  ) +
  theme_minimal()
\`\`\``,
    output: `Graphique attendu :
- barres horizontales ;
- villes en ordonnée ;
- score moyen de satisfaction en abscisse ;
- Nantes en tête ;
- Marseille en retrait.`,
  },
  {
    missionId: "foodtech",
    format: "ggplot2",
    title: "Temps moyen de livraison",
    subtitle: "Visualiser un KPI à minimiser",
    code: `\`\`\`{r}
ggplot(kpi_city, aes(x = city, y = avg_delivery_time)) +
  geom_col() +
  coord_flip() +
  labs(
    title = "Temps moyen de livraison par ville",
    x = "Ville",
    y = "Temps moyen de livraison"
  ) +
  theme_minimal()
\`\`\``,
    output: `Lecture attendue :
- Nantes a le délai moyen le plus faible ;
- Marseille a le délai moyen le plus élevé ;
- un bon choix d'expansion ne doit pas regarder uniquement le revenu.`,
  },
  {
    missionId: "foodtech",
    format: "Markdown",
    title: "Recommandation finale",
    subtitle: "Extrait de conclusion rédigée dans le rapport",
    code: `## Recommandation

Nantes peut être défendue si l'on privilégie une combinaison de satisfaction client,
récurrence et efficacité opérationnelle.

Paris peut aussi être défendue si la priorité stratégique est le volume et le revenu total.

La recommandation dépend donc du critère stratégique prioritaire. Une conclusion correcte
doit préciser le KPI retenu, sa justification, et la limite associée.`,
    output: `Point refusé en correction :
"Je choisis cette ville parce qu'elle est première."

Attendu :
- première sur quel KPI ;
- pourquoi ce KPI compte ;
- quelle limite existe.`,
  },
];