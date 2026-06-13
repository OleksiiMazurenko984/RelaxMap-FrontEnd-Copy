import { LocationsPage } from "@/components/locations/LocationsPage/LocationsPage";
import css from "./page.module.css";

export default function LocationsRoutePage() {
  return (
    <main className={css.page}>
      <section className={css.container}>
        <LocationsPage />
      </section>
    </main>
  );
}
