"use client";
import { useState } from "react";
import { AppButton } from "@/components/ui/Button/Button";
import css from "./LocationsPage.module.css";

const PER_PAGE = 9;

const mockLocations = [
  {
    _id: "1",
    image: "/location-1.jpg",
    name: "Сонячна Рів'єра",
    locationType: "Море",
    region: "more",
    rate: 5,
  },
  {
    _id: "2",
    image: "/location-2.jpg",
    name: "Тилігульський Спокій",
    locationType: "Море",
    region: "more",
    rate: 5,
  },
  {
    _id: "3",
    image: "/location-3.jpg",
    name: "Кінбурнська Вольниця",
    locationType: "Море",
    region: "more",
    rate: 5,
  },
  {
    _id: "4",
    image: "/location-4.jpg",
    name: "Арабатська Стрілка Ретрит",
    locationType: "Море",
    region: "more",
    rate: 5,
  },
  {
    _id: "5",
    image: "/location-5.jpg",
    name: "Лемурійські Береги",
    locationType: "Море",
    region: "more",
    rate: 5,
  },
  {
    _id: "6",
    image: "/location-6.jpg",
    name: "Полонина Тиші",
    locationType: "Гори",
    region: "mountains",
    rate: 5,
  },
  {
    _id: "7",
    image: "/location-7.jpg",
    name: "Дземброня: Місце Сили",
    locationType: "Гори",
    region: "mountains",
    rate: 5,
  },
  {
    _id: "8",
    image: "/location-8.jpg",
    name: "Верховинський Відгомін",
    locationType: "Гори",
    region: "mountains",
    rate: 5,
  },
  {
    _id: "9",
    image: "/location-9.jpg",
    name: "Боржавський Дзен",
    locationType: "Гори",
    region: "mountains",
    rate: 5,
  },
  {
    _id: "10",
    image: "/location-1.jpg",
    name: "Озеро Спокою",
    locationType: "Озеро",
    region: "lake",
    rate: 4,
  },
];

export const LocationsPage = () => {
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [locationType, setLocationType] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setVisibleCount(PER_PAGE);
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
    setVisibleCount(PER_PAGE);
  };

  const handleLocationTypeChange = (value: string) => {
    setLocationType(value);
    setVisibleCount(PER_PAGE);
  };

  const filteredLocations = mockLocations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region ? location.region === region : true;

    const matchesType = locationType
      ? location.locationType === locationType
      : true;

    return matchesSearch && matchesRegion && matchesType;
  });

  const visibleLocations = filteredLocations.slice(0, visibleCount);

  const hasMore = visibleCount < filteredLocations.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PER_PAGE);
  };

  return (
    <section className={css.locationsPage}>
      <h1 className={css.title}>Усі місця відпочинку</h1>

      <div className={css.filters}>
        <input
          className={css.input}
          type="text"
          placeholder="Пошук"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />

        <select
          className={css.select}
          value={region}
          onChange={(e) => handleRegionChange(e.target.value)}
        >
          <option value="">Регіон</option>
          <option value="more">Море</option>
        </select>

        <select
          className={css.select}
          value={locationType}
          onChange={(e) => handleLocationTypeChange(e.target.value)}
        >
          <option value="">Тип локації</option>
          <option value="Море">Море</option>
        </select>

        <select className={css.selectSort} defaultValue="">
          <option value="">Сортування</option>
          <option value="rating">За рейтингом</option>
          <option value="newest">Новіші</option>
        </select>
      </div>

      <ul className={css.list}>
        {visibleLocations.map((location) => (
          <li key={location._id}>
            {/* <LocationCard location={location} /> */}
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className={css.loadMoreWrapper}>
          <AppButton className={css.loadMoreButton} onClick={handleLoadMore}>
            Показати ще
          </AppButton>
        </div>
      )}
    </section>
  );
};
