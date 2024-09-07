import React, { useEffect } from "react";
import DebouncedInput from "./DebouncedInput";
import { t } from "i18next";

function FilterFunction({ column }) {
  const filterVariant = column.columnDef.filterVariant;
  const columnFilterValue = column.getFilterValue();

  //filtervalue nach Sprache formatieren
  function formatValues(column, e) {
    let values = e.target.value.split(":");
    let lang = document.documentElement.lang;
    if (values[0] === "Alle") {
      column.setFilterValue("");
    } else {
      if (lang === "de") {
        column.setFilterValue(values[0].toString());
      } else if (lang === "en") {
        column.setFilterValue(values[1]);
      } else if (lang === "ar") {
        column.setFilterValue(values[2]);
      }
    }
  }

  const sortedUniqueValues = React.useMemo(
    () =>
      filterVariant === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return (
    <>
      {/* Filter für Land oder Unternehmen */}
      {filterVariant === "select-typ" ? (
        <div className="filter__container_typ">
          <label id="typ-select">{t("table.typ-label")}</label>
          <select
            id="typ-select"
            label="Typ"
            defaultValue={"Alle:All:الكل"}
            onChange={(e) => formatValues(column, e)}
          >
            {/* Alle optionen */}
            <option value="" key="">
              --
            </option>
            <option value={"Alle:All:الكل"}>
              {t("table.typ-options.all")}
            </option>
            <option value={"Land:Country:دولة"}>
              {t("table.typ-options.country")}
            </option>

            <option value={"Unternehmen:Company:شركة"}>
              {t("table.typ-options.company")}
            </option>
          </select>
        </div>
      ) : //filter für Kontinent
      filterVariant === "select-kontinent" ? (
        <div className="filter__container_kontinent">
          <label id="kontinent-select">{t("table.continent-label")}</label>

          <select
            label="Kontinent"
            id="kontinent-select"
            defaultValue={"Alle:All:الكل"}
            onChange={(e) => formatValues(column, e)}
          >
            <option value="" key="">
              --
            </option>
            <option value={"Alle:All:الكل"}>
              {t("table.continent-options.all")}
            </option>
            <option value={"Europa:Europe:أوروبا"}>
              {t("table.continent-options.europe")}
            </option>
            <option value={"Afrika:Africa:أفريقيا"}>
              {t("table.continent-options.africa")}
            </option>
            <option value={"Amerika:America:أمريكا"}>
              {t("table.continent-options.america")}
            </option>
            <option value={"Asien:Asia:آسيا"}>
              {t("table.continent-options.asia")}
            </option>
            <option value={"Australien:Australia:أستراليا"}>
              {t("table.continent-options.australia")}
            </option>
            <option value={"Antarktika:Antarctica:القطب الجنوبي"}>
              {t("table.continent-options.antarctica")}
            </option>
          </select>
        </div>
      ) : (
        <>
          {/* filter für Text-Input */}
          <datalist id={column.id + "list"}>
            {sortedUniqueValues.slice(0, 5000).map((value) => (
              <option value={value} key={value} />
            ))}
          </datalist>
          <div className="filter__container_text">
            <label id="textInput">{t("table.text-label")}</label>
            <DebouncedInput
              id="textInput"
              type="text"
              value={columnFilterValue ?? ""}
              onChange={(value) => column.setFilterValue(value)}
              placeholder={`Search... `}
              list={column.id + "list"}
            />
          </div>
        </>
      )}
    </>
  );
}

export default FilterFunction;
