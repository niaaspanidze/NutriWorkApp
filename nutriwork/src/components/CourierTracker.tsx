import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = ["Preparing", "Picked Up", "On the Way", "Delivered"];
const CURRENT_STEP = 2; // 0-indexed, so 2 is "On the Way"

export function CourierTracker() {
  return (
    <Card className="border-card-border shadow-md overflow-hidden relative">
      <CardContent className="p-0">
        <div className="p-6 md:p-8 bg-card">
          
          {/* Progress Bar */}
          <div className="mb-10 relative">
            <div className="absolute left-0 right-0 top-3 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${(CURRENT_STEP / (STEPS.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between relative z-10">
              {STEPS.map((step, index) => {
                const isCompleted = index <= CURRENT_STEP;
                const isCurrent = index === CURRENT_STEP;
                
                return (
                  <div key={step} className="flex flex-col items-center">
                    <div className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center border-4 shadow-sm transition-all duration-500",
                      isCurrent ? "bg-primary border-white ring-4 ring-primary/20 scale-125" : 
                      isCompleted ? "bg-primary border-primary" : "bg-card border-muted"
                    )}>
                      {isCompleted && !isCurrent && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className={cn(
                      "text-xs font-bold mt-3 text-center w-20 transition-colors",
                      isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Courier Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-muted/30 border border-border">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-muted">
                  {/* Placeholder Avatar */}
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    GK
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-card flex items-center justify-center text-[10px]">
                  🛵
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-foreground">Giorgi Khvedelidze</h3>
                <p className="text-muted-foreground font-medium text-sm flex items-center gap-2">
                  White Scooter • <span className="bg-background px-2 py-0.5 rounded border font-mono text-xs text-foreground">BB-555-B</span>
                </p>
                <div className="mt-2 text-primary font-bold animate-pulse">
                  Arriving in ~12 min
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="flex-1 md:w-auto h-12 gap-2 text-muted-foreground opacity-50 cursor-not-allowed border-dashed"
              >
                <MessageSquare className="w-4 h-4" />
                Message
              </Button>
              <a href="tel:+995555123456" className="flex-1 md:w-auto">
                <Button className="w-full h-12 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20">
                  <Phone className="w-4 h-4" />
                  Call Courier
                </Button>
              </a>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
