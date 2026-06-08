import css from "./LocationCard.module.css";
import { AppLink } from "@/components/ui/Button/Button";
import { StarRating } from "react-flexible-star-rating";

interface LocationCardProps {}

const LocationCard = ({}: LocationCardProps) => {
  const mockData = {
    id: "1",
    title: "Синя Рів'єра",
    type: "Море",
    region: "Одеська область",
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  };
  return (
    <article className={css.card}>
      <img className={css.image} src={mockData.imageUrl} alt={mockData.title} />

      <div className={css.content}>
        <p className={css.type}>{mockData.type}</p>

        <div className={css.rating}>
          <StarRating
            initialRating={mockData.rating}
            isReadOnly
            dimension={9}
            isHalfRatingEnabled
            color="#000000"
          />
        </div>
        <h3 className={css.title}>{mockData.title}</h3>
        <AppLink href={`/locations/${location._id}`} variant="secondary">
          Переглянути локацію
        </AppLink>
      </div>
    </article>
  );
};

export default LocationCard;
