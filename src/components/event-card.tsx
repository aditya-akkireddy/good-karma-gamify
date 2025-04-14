
import { Calendar, MapPin, Users, Mail, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventDetail {
  day: string;
  activities: string[];
}

interface EventCardProps {
  clubName: string;
  title: string;
  description: string;
  details: EventDetail[];
  venue: string;
  teamSize: string;
  registrationFee: string;
  contactEmail: string;
}

export function EventCard({
  clubName,
  title,
  description,
  details,
  venue,
  teamSize,
  registrationFee,
  contactEmail
}: EventCardProps) {
  return (
    <Card className="card-hover border border-border">
      <CardHeader>
        <div className="text-xs font-medium px-2 py-1 rounded-full bg-muted w-fit mb-2">
          {clubName}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {details.map((detail, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-medium text-primary">{detail.day}</h4>
            <ul className="space-y-1 list-disc pl-5">
              {detail.activities.map((activity, idx) => (
                <li key={idx} className="text-sm">{activity}</li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="border-t border-border pt-4 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>Venue: {venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>Team Size: {teamSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span>Registration Fee: {registrationFee}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>Contact: {contactEmail}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  );
}
