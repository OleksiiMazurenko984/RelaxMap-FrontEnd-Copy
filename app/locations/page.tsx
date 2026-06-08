import { LocationsPage } from "@/components/LocationsPage/LocationsPage";
import css from "./page.module.css";

export default function LocationsRoutePage() {
  return (
    <main className={css.page}>
      <div className={css.container}>
        <LocationsPage />
      </div>
    </main>
  );
}
