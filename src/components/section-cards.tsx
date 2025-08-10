import { IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SectionCardsProps = {
  totalCourses: number;
  totalBlogPosts: number;
  popularCourses: number;
  newCourses: number;
};

export function SectionCards({
  totalCourses,
  totalBlogPosts,
  popularCourses,
  newCourses,
}: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-primary/0">
        <CardHeader className="relative z-10">
          <CardDescription>Total Courses</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalCourses.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <IconTrendingUp />+
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="relative z-10 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Courses available <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Based on mock data</div>
        </CardFooter>
      </Card>
      <Card className="@container/card group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-primary/0">
        <CardHeader className="relative z-10">
          <CardDescription>Blog Posts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalBlogPosts.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <IconTrendingUp />+
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="relative z-10 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Posts published <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">From mock API</div>
        </CardFooter>
      </Card>
      <Card className="@container/card group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-primary/0">
        <CardHeader className="relative z-10">
          <CardDescription>Popular Courses</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {popularCourses.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <IconTrendingUp />+
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="relative z-10 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Marked as popular <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Curated selection</div>
        </CardFooter>
      </Card>
      <Card className="@container/card group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-primary/0">
        <CardHeader className="relative z-10">
          <CardDescription>New Courses</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {newCourses.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              <IconTrendingUp />
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="relative z-10 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Recently added <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Flagged as new</div>
        </CardFooter>
      </Card>
    </div>
  );
}
