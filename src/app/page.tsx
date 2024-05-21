import React, { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Recipe {
  title:string;
  image: string;
  time: number;
  desc: string;
  vegan: boolean;
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes")

  return result.json()
}

export default async function Home() {

  const recipes = await getRecipes()

  return (
    <main>
      <div className="grid gird-cols-3 gap-8">
        {recipes.map(recipe=> (
          <Card key={recipe.id}>
            <CardHeader>
              <div>
                <CardTitle>
                  {recipe.title}
                </CardTitle>
                <CardDescription>
                  {recipe.time} minutes to cook
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                {recipe.desc}
              </p>
            </CardContent>
          </Card>
        ))}

      </div>
    </main>
  );
}
