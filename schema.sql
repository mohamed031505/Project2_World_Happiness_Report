CREATE TABLE WHR2021 (
  Country_name VARCHAR(100) PRIMARY KEY NOT NULL,
  Regional_indicator VARCHAR(100) NOT NULL,
  Ladder_score INTEGER NOT NULL,
  Standard_error_of_ladder_score INTEGER NOT NULL,
  upperwhisker INTEGER NOT NULL,
  lowerwhisker INTEGER NOT NULL,
  Logged_GDP_per_capita INTEGER NOT NULL,
  Social_support INTEGER NOT NULL,
  Healthy_life_expectancy INTEGER NOT NULL,
  Freedom_to_make_life_choices INTEGER NOT NULL,
  Generosity INTEGER NOT NULL,
  Perceptions_of_corruption INTEGER NOT NULL,
  Ladder_score_in_Dystopia INTEGER NOT NULL,
  Explained_by_Log_GDP_per_capita INTEGER NOT NULL,
  Explained_by_Social_support INTEGER NOT NULL,
  Explained_by_Healthy_life_expectancy INTEGER NOT NULL,
  Explained_by_Freedom_to_make_life_choices INTEGER NOT NULL,
  Explained_by_Generosity INTEGER NOT NULL,
  Explained_by_Perceptions_of_corruption INTEGER NOT NULL,
  Dystopia_residual INTEGER NOT NULL,
  Residual_X INTEGER NOT NULL
);