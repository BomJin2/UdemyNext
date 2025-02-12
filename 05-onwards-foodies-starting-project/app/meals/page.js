import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingOut from "./loading-out";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose youre favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingOut />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
export default MealPage;
