import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const PandithProfile = ({ pandith }: { pandith: any }) => {
  return (
    <motion.div
      className="p-4 bg-[#1A1831] rounded-2xl shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="border-none bg-[#231F42]">
        <CardHeader className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={pandith.photo} alt={pandith.pandith_name} />
            <AvatarFallback className="bg-[#3A3664] text-[#D8B4FE] text-lg">
              {pandith.pandith_name
                .split(" ")
                .map((n: any) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="text-lg text-[#D8B4FE]">
              {pandith.pandith_name}
            </CardTitle>
            <p className="text-[#B4A5D0] text-sm">
              {pandith.experience} of Experience
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {pandith.spoken.map((lang: string, index: number) => (
              <Badge key={index} className="bg-[#2A2654] text-[#D8B4FE]">
                {lang}
              </Badge>
            ))}
          </div>

          <p className="text-sm text-[#B4A5D0] leading-relaxed">
            {pandith.pandith_description}
          </p>

          <div className="flex items-center gap-2 text-[#D8B4FE] text-sm">
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
            <span>Expert in {pandith.expertise}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PandithProfile;
