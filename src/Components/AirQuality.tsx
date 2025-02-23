import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ProgressBarWithPointer from "@/Components/ProgressBarPointer";

const AirQuality = ({ level }: { level: number }) => {
    const getStatus = (value: number) => {
        if (value <= 50) return { label: "Good", color: "bg-green-500" };
        if (value <= 100) return { label: "Moderate", color: "bg-yellow-500" };
        if (value <= 150) return { label: "Unhealthy", color: "bg-orange-500" };
        if (value <= 200) return { label: "Poor", color: "bg-red-500" };
        return { label: "Hazardous", color: "bg-purple-700" };
    };

    const { label, color } = getStatus(level);

    return (
        <Card className="flex justify-between flex-col p-4 h-full max-w-md mx-auto bg-orange-500 rounded-lg shadow-md">
            <div>
                <h2 className="text-lg font-bold text-white">AIR QUALITY</h2>
                <p className="text-2xl text-white font-bold mt-2">{label}</p>
            </div>
            <div>
                <ProgressBarWithPointer currentReading={10}/>
                <p className="text-sm text-gray-600 mt-2 text-white">
                    Air quality is {level > 100 ? "worse" : "better"} than yesterday at this time.
                </p>
            </div>
        </Card>
    );
};
export default AirQuality
