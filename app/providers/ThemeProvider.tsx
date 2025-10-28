'use client';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";


// типы для CSS-переменных
type ThemeVariables = {
  '--color-bg':string;
  '--color-header':string;
  '--color-content':string;
  '--color-text': string;
  '--color-gray': string;
  '--color-task-header': string;
  '--color-task-border': string;
};

// конфигурация цветовых схем
const THEME_CONFIG: Record<'light' | 'dark', ThemeVariables> = {
  light : {
    '--color-bg':'rgb(255,255,255)',
    '--color-header':'#232360',
    '--color-content':'#F3F4F8',
    '--color-text': '#8C97A8',
    '--color-gray': '#F3F7FD',
    '--color-task-header':'#232360',
    '--color-task-border': '#E2E2E2'
  },
  dark: {
    '--color-bg': 'rgb(30,31,37)',
    '--color-header': '#FAFAFA',
    '--color-content':'#131517',
    '--color-text': '#E1E3E7',
    '--color-gray': '#282932',
    '--color-task-header': '#F6F6F6',
    '--color-task-border': '#2C2D37'
  }
};
// провайдер для темы
export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  // получаем тему из хранилища
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // применяем CSS-переменные к корневому элементу
    const root = document.documentElement;
    // получаем соотвествующие переменные
    const themeVariables = THEME_CONFIG[theme];

    Object.entries(themeVariables).forEach(([key,value]) => {
      root.style.setProperty(key, value);
    });

    // сохраняем тему в localStorage
    localStorage.setItem('theme',theme);

  },[theme]);

  return children;
}