import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layouting } from "../PageLayout/Layouting";
import { Home } from "../Pages/Home/Home";
import { Games } from "../Pages/Games/cardgame/Games";
import { MainStory } from "../Pages/MainStory/Mainstory";
import { Characters } from "../Pages/Character/Character";
import { Ability } from "../Pages/Ability/Ability";
import { Rule } from "../Pages/Rule/Rule";
import { Forum } from "../Pages/Forum/Forum";
// import { Home, Characters, Games, MainStory, Ability, Rule, Forum,} from "Pages";
import { Loading } from "../animation/loading";
import { Login } from "../auth/login";
import { SignUp } from "../auth/signup";
// import { Stopwatch } from "../Pages/Games/settimer"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/loading" element={<Loading />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/timer" element={<Stopwatch  />} /> */}
      </Route>
      <Route path="/" element={<Layouting />}>
        <Route index path="/Home" element={<Home />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/character" element={<Characters />} />
        <Route path="/perks" element={<Ability />} />
        <Route path="/rules" element={<Rule />} />
        <Route path="/story" element={<MainStory />} />
        <Route path="/forum" element={<Forum />} />
      </Route>
    </Routes>
  );
};
