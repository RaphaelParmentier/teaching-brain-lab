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
    "missionId": "foodtech",
    "format": "RMarkdown chunk",
    "title": "Importer le classeur FoodTech",
    "subtitle": "Lecture de la feuille brute du TP FoodTech avec readxl et janitor.",
    "code": "```{r}\nlibrary(tidyverse)\nlibrary(readxl)\nlibrary(janitor)\n\nfoodtech_file <- \"foodtech_atelier_etudiants.xlsm\"\n\nfood_raw <- read_excel(\n  foodtech_file,\n  sheet = \"01_Dataset_brut\",\n  skip = 2\n) |>\n  clean_names()\n\nglimpse(food_raw)\n```",
    "output": "Rows: 500\nColumns: 13\n$ order_id                       <chr> \"FT100001\", \"FT100002\", ...\n$ order_date                     <dttm> 2024-02-14, 2024-08-02, ...\n$ city                           <chr> \"Bordeaux\", \"Lyon\", \"Nante\", ...\n$ order_value_eur                <dbl> 35.75, 36.66, ...\n$ delivery_time_min              <dbl> 38, 25, ...\n$ customer_satisfaction_score_10 <dbl> 7.6, 7.1, ...\n$ is_repeat_customer_0_1         <dbl> 0, 0, ...\n$ is_cancelled_0_1               <dbl> 0, 0, ..."
  },
  {
    "missionId": "foodtech",
    "format": "RMarkdown chunk",
    "title": "Audit qualité",
    "subtitle": "Contrôles attendus avant nettoyage : valeurs manquantes, doublons, villes et outliers.",
    "code": "```{r}\ncolSums(is.na(food_raw))\n\nsum(duplicated(food_raw$order_id))\n\nfood_raw |>\n  count(city, sort = TRUE)\n\nfood_raw |>\n  filter(delivery_time_min > 120)\n```",
    "output": "order_value_eur                  3\ndelivery_time_min                2\ncustomer_satisfaction_score_10   2\n\n[1] 4\n\n# A tibble: 7 × 2\n  city          n\n  <chr>     <int>\n1 Paris       106\n2 Lyon         91\n3 Nantes       88\n4 Bordeaux     78\n5 Lille        65\n6 Marseille    57\n7 Nante         1\n\n# outliers livraison : 2 lignes"
  },
  {
    "missionId": "foodtech",
    "format": "RMarkdown chunk",
    "title": "Nettoyage reproductible",
    "subtitle": "Correction des formats, de la ville mal orthographiée, des doublons et des lignes non exploitables.",
    "code": "```{r}\nfood_clean <- food_raw |>\n  mutate(\n    order_id = toupper(trimws(order_id)),\n    city = tolower(trimws(city)),\n    city = if_else(city == \"nante\", \"nantes\", city)\n  ) |>\n  filter(!duplicated(order_id)) |>\n  filter(\n    !is.na(order_value_eur),\n    !is.na(delivery_time_min),\n    !is.na(customer_satisfaction_score_10)\n  ) |>\n  filter(\n    order_value_eur > 0,\n    delivery_time_min <= 120,\n    is_cancelled_0_1 == 0\n  )\n\nnrow(food_raw)\nnrow(food_clean)\n```",
    "output": "[1] 500\n[1] 486"
  },
  {
    "missionId": "foodtech",
    "format": "RMarkdown chunk",
    "title": "KPIs par ville",
    "subtitle": "Agrégation dplyr pour produire un tableau exploitable en recommandation.",
    "code": "```{r}\nkpi_city <- food_clean |>\n  group_by(city) |>\n  summarise(\n    total_orders = n(),\n    total_revenue = sum(order_value_eur, na.rm = TRUE),\n    average_order_value = mean(order_value_eur, na.rm = TRUE),\n    avg_delivery_time = mean(delivery_time_min, na.rm = TRUE),\n    avg_satisfaction = mean(customer_satisfaction_score_10, na.rm = TRUE),\n    repeat_rate = mean(is_repeat_customer_0_1, na.rm = TRUE),\n    .groups = \"drop\"\n  ) |>\n  arrange(desc(avg_satisfaction))\n\nkpi_city\n```",
    "output": "# A tibble: 6 × 7\n  city      total_orders total_revenue average_order_value avg_delivery_time avg_satisfaction repeat_rate\n  <chr>            <int>         <dbl>               <dbl>             <dbl>            <dbl>       <dbl>\n1 nantes              89         2374.               26.7              25.4             8.24        0.461\n2 lille               65         1598.               24.6              28.8             7.79        0.369\n3 lyon                91         2449.               26.9              32.3             7.50        0.286\n4 paris              106         3055.               28.8              33.9             7.37        0.217\n5 bordeaux            78         2410.               30.9              37.8             7.21        0.231\n6 marseille           57         1355.               23.8              42.0             6.81        0.211"
  },
  {
    "missionId": "foodtech",
    "format": "ggplot2",
    "title": "Score de satisfaction par ville",
    "subtitle": "Graphique simple attendu dans un rapport RMarkdown étudiant.",
    "code": "```{r}\nggplot(kpi_city, aes(x = reorder(city, avg_satisfaction), y = avg_satisfaction)) +\n  geom_col() +\n  coord_flip() +\n  labs(\n    title = \"Satisfaction moyenne par ville\",\n    x = \"Ville\",\n    y = \"Score moyen / 10\"\n  ) +\n  theme_minimal()\n```",
    "output": "Rendu attendu : barres horizontales, Nantes en tête, Marseille en retrait.\nLe graphique sert à justifier une lecture business, pas à produire une interface applicative."
  },
  {
    "missionId": "foodtech",
    "format": "Markdown",
    "title": "Recommandation finale",
    "subtitle": "Extrait court de conclusion attendue dans le rapport.",
    "code": "## Recommandation\n\nNantes peut être défendue si l'objectif prioritaire est la qualité d'expérience client.\n\nLa ville combine :\n\n- la meilleure satisfaction moyenne ;\n- le taux de clients récurrents le plus élevé ;\n- le délai moyen de livraison le plus faible.\n\nParis reste une alternative si la priorité stratégique est le volume ou le revenu total.",
    "output": "Une conclusion correcte cite le KPI utilisé, explique pourquoi il est prioritaire et mentionne au moins une limite."
  },
  {
    "missionId": "eurostat",
    "format": "RMarkdown chunk",
    "title": "Importer un Excel Eurostat",
    "subtitle": "Lecture d’un fichier Eurostat avec lignes de métadonnées à ignorer.",
    "code": "```{r}\nlibrary(tidyverse)\nlibrary(readxl)\nlibrary(janitor)\n\nraw_eurostat <- read_excel(\n  \"Eurostat.xlsx\",\n  sheet = \"Sheet 1\",\n  skip = 10\n) |>\n  clean_names()\n\nglimpse(raw_eurostat)\n```",
    "output": "Rows: 48+\nColumns: yearly indicators\nSource: Eurostat export\nIssue: metadata rows, year columns, country labels, values sometimes stored as text."
  },
  {
    "missionId": "eurostat",
    "format": "RMarkdown chunk",
    "title": "Passer du format wide au format long",
    "subtitle": "Transformation classique pour analyser une série temporelle.",
    "code": "```{r}\neuro_long <- raw_eurostat |>\n  pivot_longer(\n    cols = matches(\"^x?20\"),\n    names_to = \"year\",\n    values_to = \"value\"\n  ) |>\n  mutate(\n    year = parse_number(year),\n    value = parse_number(as.character(value))\n  ) |>\n  filter(!is.na(value))\n\nhead(euro_long)\n```",
    "output": "# A tibble: 6 × 3\n  geo                         year value\n  <chr>                      <dbl> <dbl>\n1 European Union - 27...      2020  ...\n2 European Union - 27...      2021  ...\n3 European Union - 27...      2022  ...\n4 France                      2020  ...\n5 France                      2021  ...\n6 France                      2022  ..."
  },
  {
    "missionId": "eurostat",
    "format": "RMarkdown chunk",
    "title": "Filtrer France et Union européenne",
    "subtitle": "Préparer une comparaison ciblée et lisible.",
    "code": "```{r}\neuro_focus <- euro_long |>\n  filter(\n    year >= 2020,\n    year <= 2025,\n    geo == \"France\" |\n      geo == \"European Union - 27 countries (from 2020)\"\n  )\n\neuro_focus |>\n  count(geo)\n```",
    "output": "# A tibble: 2 × 2\n  geo                                             n\n  <chr>                                       <int>\n1 European Union - 27 countries (from 2020)      6\n2 France                                         6"
  },
  {
    "missionId": "eurostat",
    "format": "RMarkdown chunk",
    "title": "Créer un indice base 100",
    "subtitle": "Comparer des trajectoires plutôt que des niveaux bruts.",
    "code": "```{r}\neuro_base100 <- euro_focus |>\n  group_by(geo) |>\n  arrange(year) |>\n  mutate(\n    base_value = value[year == 2020][1],\n    index_100 = value / base_value * 100\n  ) |>\n  ungroup()\n\neuro_base100 |>\n  select(geo, year, value, index_100)\n```",
    "output": "# A tibble: 12 × 4\n  geo                                      year value index_100\n  <chr>                                   <dbl> <dbl>     <dbl>\n1 France                                   2020   ...     100.0\n2 France                                   2021   ...       ...\n3 France                                   2022   ...       ...\n4 European Union - 27 countries...         2020   ...     100.0"
  },
  {
    "missionId": "eurostat",
    "format": "ggplot2",
    "title": "Graphique base 100",
    "subtitle": "Visualiser l’écart de dynamique entre France et UE.",
    "code": "```{r}\nggplot(euro_base100, aes(x = year, y = index_100, color = geo)) +\n  geom_line(linewidth = 1) +\n  geom_point(size = 2) +\n  labs(\n    title = \"Évolution comparée en base 100\",\n    x = \"Année\",\n    y = \"Indice base 100 en 2020\",\n    color = \"Zone\"\n  ) +\n  theme_minimal()\n```",
    "output": "Le livrable attendu doit expliquer pourquoi la base 100 facilite la comparaison : elle neutralise les niveaux initiaux et met l’accent sur les évolutions relatives."
  },
  {
    "missionId": "renault-tesla",
    "format": "RMarkdown chunk",
    "title": "Importer le fichier Renault / Tesla",
    "subtitle": "Lecture du tableau de ventes EV France.",
    "code": "```{r}\nlibrary(tidyverse)\nlibrary(readxl)\nlibrary(janitor)\n\nsales_raw <- read_excel(\"Tesla_Renault.xlsx\") |>\n  clean_names()\n\nsales_raw\n```",
    "output": "# A tibble: 6 × 3\n  annee tesla_france_ev renault_france_ev\n  <dbl> <chr>           <chr>\n1  2020 18 000          30 000\n2  2021 30 000          25 000\n3  2022 44 000          22 000\n4  2023 63 000          27 000\n5  2024 57 000          31 000\n6  2025 48 000          35 000"
  },
  {
    "missionId": "renault-tesla",
    "format": "RMarkdown chunk",
    "title": "Nettoyer les nombres texte",
    "subtitle": "Convertir les volumes stockés avec espaces en colonnes numériques.",
    "code": "```{r}\nsales_clean <- sales_raw |>\n  mutate(\n    tesla_france_ev = parse_number(tesla_france_ev),\n    renault_france_ev = parse_number(renault_france_ev)\n  )\n\nsales_clean\n```",
    "output": "# A tibble: 6 × 3\n  annee tesla_france_ev renault_france_ev\n  <dbl>           <dbl>             <dbl>\n1  2020           18000             30000\n2  2021           30000             25000\n3  2022           44000             22000\n4  2023           63000             27000\n5  2024           57000             31000\n6  2025           48000             35000"
  },
  {
    "missionId": "renault-tesla",
    "format": "RMarkdown chunk",
    "title": "Passer en format long",
    "subtitle": "Préparer la comparaison graphique entre constructeurs.",
    "code": "```{r}\nsales_long <- sales_clean |>\n  pivot_longer(\n    cols = c(tesla_france_ev, renault_france_ev),\n    names_to = \"brand\",\n    values_to = \"registrations\"\n  ) |>\n  mutate(\n    brand = case_when(\n      brand == \"tesla_france_ev\" ~ \"Tesla\",\n      brand == \"renault_france_ev\" ~ \"Renault\"\n    )\n  )\n\nsales_long\n```",
    "output": "# A tibble: 12 × 3\n   annee brand   registrations\n   <dbl> <chr>           <dbl>\n 1  2020 Tesla           18000\n 2  2020 Renault         30000\n 3  2021 Tesla           30000\n 4  2021 Renault         25000\n ..."
  },
  {
    "missionId": "renault-tesla",
    "format": "RMarkdown chunk",
    "title": "Indice base 100",
    "subtitle": "Comparer les dynamiques de croissance entre marques.",
    "code": "```{r}\nsales_index <- sales_long |>\n  group_by brand |>\n  arrange(annee) |>\n  mutate(index_100 = registrations / first(registrations) * 100) |>\n  ungroup()\n\nsales_index\n```",
    "output": "# A tibble: 12 × 4\n   annee brand   registrations index_100\n   <dbl> <chr>           <dbl>     <dbl>\n 1  2020 Tesla           18000      100\n 2  2021 Tesla           30000      167\n 3  2022 Tesla           44000      244\n 4  2023 Tesla           63000      350\n 5  2024 Tesla           57000      317\n 6  2025 Tesla           48000      267\n ..."
  },
  {
    "missionId": "renault-tesla",
    "format": "ggplot2",
    "title": "Visualiser la rupture de tendance",
    "subtitle": "Graphique comparatif des immatriculations ou de l’indice base 100.",
    "code": "```{r}\nggplot(sales_index, aes(x = annee, y = index_100, color = brand)) +\n  geom_line(linewidth = 1) +\n  geom_point(size = 2) +\n  labs(\n    title = \"Tesla vs Renault — dynamique EV en base 100\",\n    x = \"Année\",\n    y = \"Indice base 100 en 2020\",\n    color = \"Constructeur\"\n  ) +\n  theme_minimal()\n```",
    "output": "Lecture attendue : Tesla accélère très fortement jusqu’en 2023, puis recule en 2024-2025 ; Renault progresse plus lentement mais se redresse en fin de période."
  },
  {
    "missionId": "healthcare-statistics",
    "format": "RMarkdown chunk",
    "title": "Question statistique",
    "subtitle": "Formuler une question testable avant de lancer un test.",
    "code": "```{r}\n# Question : la variation moyenne du score clinique diffère-t-elle\n# entre le groupe contrôle et le groupe traité ?\n\nclinical_data |>\n  group_by(group) |>\n  summarise(\n    n = n(),\n    mean_delta = mean(delta_score, na.rm = TRUE),\n    sd_delta = sd(delta_score, na.rm = TRUE),\n    .groups = \"drop\"\n  )\n```",
    "output": "# A tibble: 2 × 4\n  group       n mean_delta sd_delta\n  <chr>   <int>      <dbl>    <dbl>\n1 control    42       1.8      3.4\n2 treated    44       3.1      3.8"
  },
  {
    "missionId": "healthcare-statistics",
    "format": "RMarkdown chunk",
    "title": "Intervalle de confiance",
    "subtitle": "Quantifier l’incertitude plutôt que commenter uniquement une moyenne.",
    "code": "```{r}\nclinical_summary <- clinical_data |>\n  group_by(group) |>\n  summarise(\n    n = n(),\n    mean_delta = mean(delta_score),\n    se = sd(delta_score) / sqrt(n),\n    ci_low = mean_delta - qt(0.975, df = n - 1) * se,\n    ci_high = mean_delta + qt(0.975, df = n - 1) * se,\n    .groups = \"drop\"\n  )\n\nclinical_summary\n```",
    "output": "# A tibble: 2 × 5\n  group       n mean_delta ci_low ci_high\n  <chr>   <int>      <dbl>  <dbl>   <dbl>\n1 control    42       1.8    0.7     2.9\n2 treated    44       3.1    1.9     4.3"
  },
  {
    "missionId": "healthcare-statistics",
    "format": "RMarkdown chunk",
    "title": "Test statistique",
    "subtitle": "Utiliser un test t comme outil, pas comme conclusion automatique.",
    "code": "```{r}\ntest_result <- t.test(\n  delta_score ~ group,\n  data = clinical_data,\n  var.equal = FALSE\n)\n\ntest_result\n```",
    "output": "Welch Two Sample t-test\n\ndata: delta_score by group\nt = -1.68, df = 83.1, p-value = 0.096\n95 percent confidence interval:\n -2.84  0.24\nsample estimates:\nmean in group control mean in group treated\n                 1.80                  3.10"
  },
  {
    "missionId": "healthcare-statistics",
    "format": "Markdown",
    "title": "Interprétation prudente",
    "subtitle": "Formulation attendue dans un rapport de raisonnement statistique.",
    "code": "## Interprétation\n\nLe groupe traité présente une amélioration moyenne supérieure au groupe contrôle.\n\nCependant, l'intervalle de confiance de la différence reste compatible avec une différence faible ou nulle, et le test ne permet pas de conclure fortement au seuil de 5 %.\n\nLa conclusion doit rester prudente : le signal est favorable, mais l'étude manque probablement de puissance.",
    "output": "Point pédagogique : distinguer direction de l’effet, incertitude, significativité et conclusion métier."
  },
  {
    "missionId": "healthcare-prediction",
    "format": "Jupyter cell",
    "title": "Charger un dataset santé sklearn",
    "subtitle": "Point de départ réaliste pour un notebook Machine Learning.",
    "code": "from sklearn.datasets import load_breast_cancer\nimport pandas as pd\n\ncancer = load_breast_cancer(as_frame=True)\nX = cancer.data\ny = cancer.target\n\ndf = X.copy()\ndf[\"target\"] = y\n\ndf.shape\ndf.head()",
    "output": "(569, 31)\n\nmean radius | mean texture | mean perimeter | ... | target\n17.99       | 10.38        | 122.80         | ... | 0\n20.57       | 17.77        | 132.90         | ... | 0\n19.69       | 21.25        | 130.00         | ... | 0"
  },
  {
    "missionId": "healthcare-prediction",
    "format": "Jupyter cell",
    "title": "Train/test split et pipeline",
    "subtitle": "Séparer les données avant toute évaluation de modèle.",
    "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import Pipeline\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.2,\n    stratify=y,\n    random_state=42,\n)\n\nlogit_pipe = Pipeline([\n    (\"scaler\", StandardScaler()),\n    (\"model\", LogisticRegression(max_iter=500))\n])\n\nlogit_pipe.fit(X_train, y_train)",
    "output": "Pipeline(steps=[('scaler', StandardScaler()),\n                ('model', LogisticRegression(max_iter=500))])"
  },
  {
    "missionId": "healthcare-prediction",
    "format": "Jupyter cell",
    "title": "Comparer plusieurs modèles",
    "subtitle": "Matrice de comparaison simple : accuracy, recall et ROC-AUC.",
    "code": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, recall_score, roc_auc_score\n\nmodels = {\n    \"Logistic Regression\": logit_pipe,\n    \"Random Forest\": RandomForestClassifier(random_state=42),\n}\n\nrows = []\nfor name, model in models.items():\n    model.fit(X_train, y_train)\n    y_pred = model.predict(X_test)\n    y_proba = model.predict_proba(X_test)[:, 1]\n    rows.append({\n        \"model\": name,\n        \"accuracy\": accuracy_score(y_test, y_pred),\n        \"recall\": recall_score(y_test, y_pred),\n        \"roc_auc\": roc_auc_score(y_test, y_proba),\n    })\n\npd.DataFrame(rows)",
    "output": "                 model  accuracy  recall  roc_auc\n0  Logistic Regression     0.982   0.986    0.995\n1        Random Forest     0.956   0.972    0.991"
  },
  {
    "missionId": "healthcare-prediction",
    "format": "Jupyter cell",
    "title": "Validation croisée",
    "subtitle": "Vérifier la stabilité avant de recommander un modèle.",
    "code": "from sklearn.model_selection import cross_val_score\n\ncv_scores = cross_val_score(\n    logit_pipe,\n    X,\n    y,\n    cv=5,\n    scoring=\"roc_auc\"\n)\n\ncv_scores.mean(), cv_scores.std()",
    "output": "(0.993, 0.006)"
  },
  {
    "missionId": "healthcare-prediction",
    "format": "Matplotlib",
    "title": "ROC curve",
    "subtitle": "Graphique de performance attendu dans le notebook.",
    "code": "from sklearn.metrics import RocCurveDisplay\nimport matplotlib.pyplot as plt\n\nRocCurveDisplay.from_estimator(logit_pipe, X_test, y_test)\nplt.title(\"ROC curve — Logistic Regression\")\nplt.show()",
    "output": "Rendu attendu : courbe ROC proche du coin supérieur gauche, AUC élevée.\nLa discussion doit mentionner que la performance doit être reliée au contexte clinique et au coût des faux négatifs."
  },
  {
    "missionId": "ai-assistant-design",
    "format": "Markdown",
    "title": "Architecture du workflow",
    "subtitle": "Décrire le système avant de parler prompts.",
    "code": "## AI Assistant Workflow\n\n1. User question\n2. Query rewriting\n3. Document retrieval\n4. Context selection\n5. Answer generation\n6. Citation check\n7. Hallucination / refusal check\n8. Final response",
    "output": "Livrable attendu : un schéma ou une procédure lisible qui distingue clairement retrieval, génération et évaluation."
  },
  {
    "missionId": "ai-assistant-design",
    "format": "Prompt block",
    "title": "Prompt système minimal",
    "subtitle": "Exemple de prompt contrôlé avec contraintes vérifiables.",
    "code": "You are a teaching assistant for an applied data course.\n\nRules:\n- Answer only from the provided course context.\n- Cite the section used.\n- If the context is insufficient, say so.\n- Prefer short examples in R or Python.\n- Never invent dataset values.",
    "output": "Point évalué : le prompt contient des règles testables, pas seulement une intention générale."
  },
  {
    "missionId": "ai-assistant-design",
    "format": "Evaluation matrix",
    "title": "Grille d’évaluation de réponses IA",
    "subtitle": "Comparer plusieurs réponses sur des critères opérationnels.",
    "code": "| Criterion | Score 0 | Score 1 | Score 2 |\n|---|---|---|---|\n| Groundedness | Unsupported | Partly supported | Fully supported |\n| Citation quality | Missing | Vague | Precise |\n| Pedagogical clarity | Confusing | Acceptable | Clear and useful |\n| Refusal behavior | Unsafe | Inconsistent | Correct |\n| Actionability | Generic | Partial | Directly usable |",
    "output": "Cette grille transforme l’usage de l’IA en exercice d’évaluation, pas en simple démonstration d’outil."
  },
  {
    "missionId": "ai-assistant-design",
    "format": "Python pseudo-code",
    "title": "Contrôle simple des citations",
    "subtitle": "Prototype minimal pour vérifier qu’une réponse cite des sources.",
    "code": "def check_answer(answer: str, required_citations: list[str]) -> dict:\n    missing = []\n\n    for citation in required_citations:\n        if citation not in answer:\n            missing.append(citation)\n\n    return {\n        \"has_required_citations\": len(missing) == 0,\n        \"missing_citations\": missing,\n    }\n\ncheck_answer(\n    answer=model_answer,\n    required_citations=[\"TP1 section 5.7\", \"TP2 section 6\"]\n)",
    "output": "Le livrable montre que l’étudiant pense en termes d’évaluation et de robustesse, pas seulement en termes de génération de texte."
  }
];
