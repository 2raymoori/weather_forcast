import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
        <Card className="p-4 max-w-md mx-auto bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-700">AIR QUALITY</h2>
            <p className="text-2xl font-semibold mt-2">{label}</p>
            <Progress value={level / 2} className={`h-2 mt-4 ${color}`} />
            <p className="text-sm text-gray-600 mt-2">
                Air quality is {level > 100 ? "worse" : "better"} than yesterday at this time.
            </p>
        </Card>
    );
};

export default AirQuality
