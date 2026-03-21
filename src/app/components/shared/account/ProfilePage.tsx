import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Mail, ShieldCheck } from 'lucide-react';
import { IUser } from '@/interfaces/user.interface';

const ProfileBox = async ({ user }: { user: IUser }) => {
  if (!user) {
    return <div className="p-10 text-center">ইউজার খুঁজে পাওয়া যায়নি।</div>;
  }

  const joinedDate = new Date(user.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className=" mx-auto  ">
      <Card className="border-none shadow-md overflow-hidden">
        <CardContent className=" px-6 pb-6">
          <div className=" -top-12 flex flex-col md:flex-row items-start md:items-center gap-5">
            {/* অ্যাভাটার */}
            <Avatar className="h-32 w-32 border-4 border-background shadow-lg rounded-2xl">
              <AvatarImage src={user.picture || ''} alt={user.name} />
              <AvatarFallback className="bg-muted text-3xl font-bold rounded-2xl">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <Badge
                  variant="secondary"
                  className="px-3 py-0.5 font-semibold tracking-wide"
                >
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  {user.role}
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* পার্সোনাল ইনফরমেশন */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">
                ব্যক্তিগত তথ্য
              </h3>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400">
                    ইমেইল এড্রেস
                  </p>
                  <p className="text-sm text-foreground">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <CalendarDays className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400">
                    যোগদানের তারিখ
                  </p>
                  <p className="text-sm text-foreground">{joinedDate}</p>
                </div>
              </div>
            </div>

            {/* স্ট্যাটাস বা অন্যান্য তথ্য */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">
                অ্যাকাউন্ট স্ট্যাটাস
              </h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                  আপনি বর্তমানে এই সিস্টেমের <strong>{user.role}</strong> হিসেবে
                  যুক্ত আছেন। আপনার কাছে ড্যাশবোর্ডের পূর্ণ এক্সেস রয়েছে।
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileBox;
