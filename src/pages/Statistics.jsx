import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppStore } from "../lib/zustand";
import MyBarChart from "../components/MyBarChart";

import {
  collectStatistics,
  myTranslation,
  needStatisticReport,
} from "../lib/my-utils";
import { Label } from "@/components/ui/label";
import MyPieChart from "../components/MyPieChart";
import RadioGroupDemo from "../components/RadioGroupDemo";

const Statistics = () => {
  const flowers = useAppStore((state) => state.flowers);
  const [color, setColor] = useState("1");
  const [type, setType] = useState("bar");
  const [value, setValue] = useState("country");
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (flowers) {
      setStats(() => {
        return collectStatistics(flowers, value);
      });
    }
  }, [value, flowers, color]);

  return (
    <div className="mb-10">
      <div className="flex w-full items-center justify-between border-b p-5">
        <h2 className="h2">Statistika</h2>
      </div>
      <div className="mb-5 flex gap-5">
        <div>
          <Label>Mavzuni tanlang</Label>
          <Select value={type} onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Turni tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar chart</SelectItem>
              <SelectItem value="pie">Pie chart</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Turkumni tanlang</Label>
          <Select value={value} onValueChange={(value) => setValue(value)}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Statistika" />
            </SelectTrigger>
            <SelectContent>
              {needStatisticReport?.map((item) => {
                return (
                  <SelectItem key={item} value={item} className="capitalize">
                    {myTranslation(item)}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="ml-5">Ko'rinishni tanlang</Label>
        <RadioGroupDemo setColor={setColor} />
      </div>
      {type === "bar" && stats && (
        <MyBarChart chartData={stats.result} themeColor={color} />
      )}
      {type === "pie" && stats && (
        <MyPieChart
          chartData={stats.result}
          values={stats.data}
          themeColor={color}
        />
      )}
    </div>
  );
};

export default Statistics;
