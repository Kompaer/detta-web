import { defineStore } from "pinia";
import { useGetTextBlocks } from "./useTranslation";

export const useTextStore = defineStore("text", () => {
  const texts: Record<string, Record<string, any>> = {};

  async function load(
    publisher_id: string,
    lang: string
  ): Promise<Record<string, any> | undefined> {
    try {
      console.log("Loading");
      const data = await useGetTextBlocks(publisher_id, lang);
      let publisher = texts[publisher_id];
      if (!publisher) {
        texts[publisher_id] = {};
        publisher = texts[publisher_id];
      }
      publisher[lang] = data;
      return publisher;
    } catch (e) {
      return undefined;
    } //TODO Only load this once, so this store actually does something
  }

  async function getText(
    publisher_id: string,
    key: string,
    lang: string
  ): Promise<string> {
    let publisher = texts[publisher_id];
    if (!publisher) publisher = await load(publisher_id, lang);
    if (!publisher) return "ERROR PUBLISHER";
    let blocks = publisher[lang];
    if (!blocks) {
      publisher = await load(publisher_id, lang);
      if (!publisher) return "ERROR PUBLISHER";
      blocks = publisher[lang];
    }
    if (!blocks) return "ERROR LANG";

    const split = key.split(".", 2);
    if (split.length !== 2) return "ERROR KEY LENGTH";
    const cat = split[0];
    const name = split[1];
    if (!cat || !name) return "ERROR KEY";
    const block = blocks[cat];
    if (!block) return "CATEGORY ERROR";
    const value = block[name];
    if (!value) return "KEY NOT FOUND";
    return value;
  }

  return { getText };
});
