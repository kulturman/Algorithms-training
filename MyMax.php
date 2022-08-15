<?php
 
declare(strict_types=1);
 
function my_max(
    array $xs
): int
{
    $max = PHP_INT_MIN;
    foreach ($xs as $currentValue) {
        if(is_array($currentValue)) {
            $arrayMax = my_max($currentValue);
            //Could have use a ternary but a if statement seems more clean to me
            if($arrayMax > $max) {
                $max = $arrayMax;
            }
        }
            
        elseif ($currentValue > $max) {
            $max = $currentValue;
        }
    }
    return $max;
}
 
echo my_max([-100, [1000], 10, [100, -1, [-1000000, 5, 200, 1000, [40, 78, 10, [27, 12, [7000], 80, 9000], 5000]]]]).PHP_EOL; // 9000
echo my_max([1000, 10, 1,8, 80, [100, -1, [10000, 5, 200, 1000, [40, 78, 10, [27, 12, 7000], 8000]]]]).PHP_EOL; // 10000
echo my_max([1, 2, 3, -1, -9]).PHP_EOL; // 3
echo my_max([-1000, -2, -1, -9, [0, 0, [-25]]]).PHP_EOL; // 0
echo my_max([-1000, [-15], [-100, -200], [-188]]).PHP_EOL; // -15