# Teaching Brain Lab — Route d'intégration premium

## Objectif
Transformer les 6 missions pédagogiques en preuves visuelles concrètes : ce que les étudiants produisent réellement. Le cerveau reste le point d'entrée conceptuel ; les livrables deviennent la preuve professionnelle.

## Route recommandée

1. Ajouter les assets SVG dans `public/artifacts/<mission-id>/`.
2. Ajouter `data/teaching-artifacts.ts`.
3. Ajouter `components/artifacts/TeachingArtifactsSection.tsx`.
4. Importer la section dans `app/page.tsx`, juste après les missions pédagogiques et avant le CTA final.
5. Relier ensuite le cerveau aux missions via ancres : `#artifacts` puis filtrage par mission si souhaité.

## Position dans la page

Ordre cible :

```tsx
<BrainCanvas />
<TeachingMissionSection />
<TeachingArtifactsSection />
```

La section doit apparaître après les missions, pas dans le cerveau. Le cerveau explique la progression ; les artefacts prouvent le résultat.

## Commandes

```bash
mkdir -p public/artifacts/foodtech
mkdir -p public/artifacts/eurostat
mkdir -p public/artifacts/renault-tesla
mkdir -p public/artifacts/healthcare-prediction
mkdir -p public/artifacts/healthcare-statistics
mkdir -p public/artifacts/ai-assistant-design
mkdir -p components/artifacts
```

Copier ensuite les fichiers du package dans les mêmes chemins du repo.

## Intégration `app/page.tsx`

```tsx
import BrainCanvas from "@/components/brain/BrainCanvas";
import TeachingArtifactsSection from "@/components/artifacts/TeachingArtifactsSection";

export default function Home() {
  return (
    <main>
      <BrainCanvas />
      <TeachingArtifactsSection />
    </main>
  );
}
```

Si une section missions existe déjà, placer `TeachingArtifactsSection` juste après elle.

## Philosophie de contenu

- Les programmes expliquent ce qui est enseigné.
- Les missions expliquent sur quoi les étudiants travaillent.
- Les livrables montrent ce qu'ils produisent.

## Priorité de polish

1. FoodTech : le plus réel, car corrigé complet disponible.
2. Renault vs Tesla : très lisible visuellement.
3. Eurostat : très pédagogique sur nettoyage/import/base 100.
4. Healthcare Prediction : créé sur dataset sklearn cohérent avec ton passé pharma.
5. Healthcare Statistical Reasoning : cas simulé crédible.
6. AI Assistant Design : différenciant pour IA appliquée.
